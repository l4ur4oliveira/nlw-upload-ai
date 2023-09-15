import { FastifyInstance } from 'fastify'
import { createReadStream } from 'node:fs'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { openai } from '../lib/openai'

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/videos/:id/transcription', async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { id } = paramsSchema.parse(req.params)
    const { prompt } = bodySchema.parse(req.body)

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id
      }
    })

    const videoPath = video.path
    const audioReadStream = createReadStream(videoPath)

    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: 'whisper-1',
      language: 'pt',
      response_format: 'json',
      temperature: 0,
      prompt
    })

    const transcription = response.text

    await prisma.video.update({
      where: {
        id
      },
      data: {
        transcription
      }
    })

    return { transcription }
  })
}

import { Github, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/video-input-form";

export function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="px-6 py-3 flex items-center justify-between border-b">
                <h1 className="text-xl font-bold">uplod.ai</h1>

                <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground">Desenvolvido com 💟 na NLW IA</span>

                    <Separator orientation="vertical" className="h-6" />

                    <Button variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Github
                    </Button>
                </div>
            </header>

            <main className="flex-1 p-6 flex gap-6">
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex-1 grid grid-rows-2 gap-4">
                        {/* prettier-ignore */}
                        <Textarea 
                            className="resize-none p-4 leading-relaxed" 
                            placeholder="Inclua o prompt..." 
                        />
                        <Textarea
                            className="resize-none p-4 leading-relaxed"
                            placeholder="Resultado gerado pela IA..."
                            readOnly
                        />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Lembre-se: você poderá utilizar a variável
                        <code className="text-violet-400 mx-1">{"{transcription}"}</code>
                        no seu prompt para adicionar o conteúdo de transcrição do vídeo selecionado.
                    </p>
                </div>

                <aside className="w-80 space-y-6">
                    <VideoInputForm />

                    <Separator />

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label>Prompt</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione um prompt..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="title">Título para vídeo</SelectItem>
                                    <SelectItem value="description">Descrição para vídeo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Modelo</Label>
                            <Select defaultValue="gpt3.5" disabled>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                                </SelectContent>
                            </Select>
                            <span className="block text-xs text-muted-foreground italic">
                                Você poderá customizar esta opção em breve
                            </span>
                        </div>

                        <div className="space-y-4">
                            <Label>Temperatura</Label>
                            <Slider min={0} max={1} step={0.1} defaultValue={[0.5]} className="cursor-pointer" />
                            <span className="block text-xs text-muted-foreground italic leading-relaxed">
                                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
                            </span>
                        </div>

                        <Button type="submit" className="w-full">
                            Executar <Wand2 className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                </aside>
            </main>
        </div>
    );
}

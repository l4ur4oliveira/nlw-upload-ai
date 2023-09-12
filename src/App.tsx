import { Button } from "./components/ui/button";
import { Github } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";

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
                        Lembre-se: você poderá utilizar a variável{" "}
                        <code className="text-violet-400">{"{transcription}"}</code> no seu prompt para adicionar o
                        conteúdo de transcrição do vídeo selecionado.
                    </p>
                </div>
                <aside className="w-80"></aside>
            </main>
        </div>
    );
}

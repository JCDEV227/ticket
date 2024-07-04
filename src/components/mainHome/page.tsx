import { Button } from "@/components/ui/button"
import { CarrosselEvent } from "../CarrosselEvent/page"
import { CardBeneficios } from "../cardBeneficios/page"
import { CardSimples } from "../cardSimples/page"
import { CarrosselAuto } from "../carrosselAuto/page"

export function MainHome(){
    return (
       <main>
         <div className="min-w-[100%] p-8 mb-8 lg:px-[20%] bg-slate-50 text-zinc-950 flex flex-col gap-6">
            <div className="flex flex-col justify-between items-center lg:flex-row gap-2">
                <div className="flex flex-col gap-4">
                    <h1>LOGO</h1>
                    <p>jhzurghuhgakihhzbfnijjn  jhsnuGNJ JFHANGNDSNJ</p>
                    <Button className="lg:w-[150px] lg:h-10 lg:flex-none hover:animate-pulse">Criar conta</Button>
                </div>
                <div>o</div>
            </div>
            <div className="min-w-[100%] lg:max-w-[90%] flex justify-center items-center">
                <CarrosselAuto />
            </div>
            <div className="flex justify-center items-center">
                <Button className="lg:w-[200px] lg:h-10 lg:flex-none hover:animate-pulse">Comprar Ingresso</Button>
            </div>
        </div>
        <div className="min-w-screen bg-background p-8 mb-8 lg:px-[20%] bg-yellow-500 rounded-br-lg rounded-bl-lg text-zinc-950 flex flex-col justify-between items-center lg:flex-row gap-2">
            <div>
                o
            </div>
            <div>
                <Button variant="secondary" className="lg:w-[150px] lg:h-10 lg:flex-none hover:animate-pulse">Criar Evento</Button>
            </div>
        </div>
        <div className="min-w-screen p-8 mb-8 lg:px-[20%] flex flex-col justify-between items-center lg:flex-row gap-4">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Beneficios de <span className="bg-yellow-500 p-1 m-1 py-2 rounded-sm text-zinc-950">Comprar</span> Ingresso na TICKET</h2>
                <div className="mt-4 flex flex-col lg:items-start items-center justify-center gap-2">
                    <CardBeneficios />
                    <CardBeneficios />
                    <CardBeneficios />
                </div>
                <Button className="lg:w-[200px] lg:h-10 lg:flex-none hover:animate-pulse mb-4">Comprar Ingresso</Button>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Beneficios de <span className="bg-yellow-500 p-1 m-1 py-2 rounded-sm text-zinc-950">Vender</span> Ingresso na TICKET</h2>

                <div className="mt-4 flex flex-col lg:items-start items-center justify-center gap-2">
                    <CardBeneficios />
                    <CardBeneficios />
                    <CardBeneficios />
                </div>
                <Button className="lg:w-[150px] lg:h-10 lg:flex-none hover:animate-pulse">Criar Evento</Button>
            </div>
        </div>
        <div className="min-w-screen bg-background p-8 mb-8 lg:px-[20%] bg-yellow-500 rounded-br-lg rounded-bl-lg text-zinc-950 flex flex-col justify-between items-center lg:flex-row gap-2">
            Banner
        </div>
        <div className="min-w-screen p-8 mb-8 lg:px-[20%] flex flex-col gap-2">
        <h2 className="text-xl font-bold">Perguntas <span className="bg-yellow-500 p-1 m-1 py-2 rounded-sm text-zinc-950">frequentes</span></h2>
        <div className="mt-4 flex flex-col lg:items-start items-center justify-center gap-2">
            <CardSimples />
            <CardSimples />
            <CardSimples />
        </div>
        <Button className="lg:w-[150px] lg:h-10 lg:flex-none hover:animate-pulse">Ver nais</Button>
        </div>
       </main>
    )
}
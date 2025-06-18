
'use client'

import { useState } from "react"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { calcularSintrom } from "../lib/calculadora_sintrom"
import { Pill, Home, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [inr, setInr] = useState("")
  const [dts, setDts] = useState("")
  const [prevInr, setPrevInr] = useState("")
  const [ultimoControlMenor7Dias, setUltimoControlMenor7Dias] = useState(false)
  const [cambiosClinicos, setCambiosClinicos] = useState(false)
  const [resultado, setResultado] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const res = calcularSintrom(
      parseFloat(inr),
      parseFloat(dts),
      parseFloat(prevInr),
      ultimoControlMenor7Dias,
      cambiosClinicos
    )
    setResultado(res)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black">
      <div className="w-full max-w-md space-y-6 bg-gray-50 p-6 rounded-2xl shadow-xl">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Pill className="w-5 h-5" /> Calculadora de Sintrom
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>INR actual</Label>
            <Input type="number" step="0.1" value={inr} onChange={e => setInr(e.target.value)} required />
          </div>
          <div>
            <Label>DTS previa</Label>
            <Input type="number" step="0.1" value={dts} onChange={e => setDts(e.target.value)} required />
          </div>
          <div>
            <Label>INR previo</Label>
            <Input type="number" step="0.1" value={prevInr} onChange={e => setPrevInr(e.target.value)} required />
          </div>
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={ultimoControlMenor7Dias} onChange={e => setUltimoControlMenor7Dias(e.target.checked)} />
              Último control ≤ 7 días
            </label>
          </div>
          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={cambiosClinicos} onChange={e => setCambiosClinicos(e.target.checked)} />
              Cambios clínicos o medicación
            </label>
          </div>
          <Button type="submit">Calcular</Button>
        </form>
        {resultado && (
          <div className="mt-4 bg-green-100 p-3 rounded-lg text-sm">{resultado}</div>
        )}
        <div className="flex justify-between pt-4 border-t border-gray-300">
          <Link href="/" className="text-blue-600 hover:underline flex items-center gap-1">
            <Home className="w-4 h-4" /> Inicio
          </Link>
          <Link href="#" className="text-blue-600 hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Anterior
          </Link>
          <Link href="#" className="text-blue-600 hover:underline flex items-center gap-1">
            Siguiente <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}

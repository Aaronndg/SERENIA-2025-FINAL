'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Navigation } from '@/components/Navigation'

interface CommunityNote {
  note_id: string
  user_id: string
  author_name: string
  content: string
  created_at: string
}

export default function CommunityPage() {
  const { data: session, status } = useSession()
  const [notes, setNotes] = useState<CommunityNote[]>([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🤝 Comunidad SerenIA
          </h1>
          <p className="text-xl text-gray-600">
            Comparte experiencias y apóyate en nuestra comunidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Testimonios y Experiencias</h2>
            
            <div className="grid gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-2">
                  Testimonio de Esperanza
                </h3>
                <p className="text-gray-700 mb-4">
                  "SerenIA me ha ayudado a encontrar paz en momentos difíciles. 
                  La combinación de tecnología y principios cristianos es única."
                </p>
                <div className="text-sm text-gray-500">
                  - Usuario Anónimo
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-green-800 mb-2">
                  Transformación Personal
                </h3>
                <p className="text-gray-700 mb-4">
                  "Los versículos diarios y el chat con IA me han dado herramientas 
                  para manejar la ansiedad desde una perspectiva de fe."
                </p>
                <div className="text-sm text-gray-500">
                  - Comunidad SerenIA
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-purple-800 mb-2">
                  Apoyo Continuo
                </h3>
                <p className="text-gray-700 mb-4">
                  "El sistema de alertas de crisis ha sido fundamental. 
                  Saber que hay ayuda disponible 24/7 me da tranquilidad."
                </p>
                <div className="text-sm text-gray-500">
                  - Beneficiario del Sistema
                </div>
              </div>
            </div>

            {!session && (
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Inicia sesión para compartir tu experiencia
                </p>
                <a 
                  href="/auth/signin"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Iniciar Sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
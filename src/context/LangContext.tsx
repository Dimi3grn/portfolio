import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { t, Lang, TrSchema } from '../translations'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  tr: TrSchema
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  // Le premier rendu doit être identique à celui du prérendu, sinon l'hydratation
  // échoue : on démarre toujours en français, puis on applique la préférence
  // stockée dans un effet, qui ne s'exécute qu'après l'hydratation.
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('lang') as Lang | null
      if (stored && stored !== 'fr') setLangState(stored)
    } catch {
      /* stockage indisponible : on reste en français */
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* la langue reste appliquée pour la session en cours */
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

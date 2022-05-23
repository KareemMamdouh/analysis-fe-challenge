import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'

const AnalysisChart = React.lazy(() => import('pages/AnalysisChart/AnalysisChart'))
const Details = React.lazy(() => import('pages/Details/Details'))

function App(): JSX.Element {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Suspense fallback={<p>{t('loading...')}</p>}>
        <Routes>
          <Route path="/" element={<AnalysisChart />} />
          <Route path="/Details/:name/:month" element={<Details />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

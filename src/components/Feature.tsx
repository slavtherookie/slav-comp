import { LucideIcon } from 'lucide-react'

interface FeatureProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function Feature({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="p-8 glass-effect rounded-xl border border-pink-200/20 hover:border-pink-300/30 transition-all max-w-md">
      <div className="w-16 h-16 bg-pink-500/80 rounded-2xl flex items-center justify-center mb-6 mx-auto">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white text-center">{title}</h3>
      <p className="text-pink-100 text-center text-lg">{description}</p>
    </div>
  )
}

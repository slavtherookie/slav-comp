import { AlertTriangle } from 'lucide-react'

export default function Rules() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-effect rounded-2xl p-8 border border-pink-200/20">
        <div className="flex items-center justify-center mb-8">
          <AlertTriangle className="text-pink-500 w-12 h-12" />
          <h1 className="text-3xl font-bold text-white ml-4">Community Rules</h1>
        </div>

        <div className="space-y-6 text-pink-100">
          <div className="glass-effect p-6 rounded-xl border border-pink-200/20">
            <h2 className="text-xl font-semibold text-white mb-3"> Important Notice</h2>
            <p className="text-lg">
              Any attempt to make the bot perform inappropriate, disgusting, or inhumane actions will result in immediate blacklisting from the service. We maintain a zero-tolerance policy for such behavior.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-pink-200/20">
            <h2 className="text-xl font-semibold text-white mb-3"> Expected Behavior</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Treat Saki with respect and kindness</li>
              <li>Keep conversations appropriate and family-friendly</li>
              <li>Report any bugs or issues through proper channels</li>
              <li>Follow Discord's Terms of Service and Community Guidelines</li>
            </ul>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-pink-200/20">
            <h2 className="text-xl font-semibold text-white mb-3"> Prohibited Actions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Attempting to bypass content filters</li>
              <li>Sharing inappropriate or adult content</li>
              <li>Harassing or bullying behavior</li>
              <li>Attempting to exploit or manipulate the bot</li>
            </ul>
          </div>

          <p className="text-sm text-pink-200 italic">
            Note: These rules are subject to change and will be updated as needed to ensure the best experience for all users.
          </p>
        </div>
      </div>
    </div>
  )
}

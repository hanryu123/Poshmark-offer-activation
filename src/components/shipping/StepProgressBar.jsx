/** Two-segment step indicator: first segment highlights current step. */
export function StepProgressBar({ currentStep = 1 }) {
  return (
    <div className="flex gap-2 px-6 pb-6">
      <div
        className={`h-1 flex-1 rounded-full ${currentStep >= 1 ? 'bg-black' : 'bg-gray-100'}`}
      />
      <div
        className={`h-1 flex-1 rounded-full ${currentStep >= 2 ? 'bg-black' : 'bg-gray-100'}`}
      />
    </div>
  )
}

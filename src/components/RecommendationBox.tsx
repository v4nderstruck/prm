export default function RecommendationBox() {
  return (
    <div>
      <p className="text-2xl font-bold mb-4">AIdvise 🤖</p>
      <div className="flex flex-col gap-4">
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="min-h-fit collapse-title text-md font-medium">
            Contact John Doe
          </div>
          <div className="collapse-content">
            <p>Hello</p>
          </div>
        </div>
        <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium">
            Text Maria Mueller about the new contract
          </div>
          <div className="collapse-content">
            <p>Hello</p>
          </div>
        </div>
        <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
          <div className="collapse-title text-md font-medium">
            Text Maria Mueller about the new contract
          </div>
          <div className="collapse-content">
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

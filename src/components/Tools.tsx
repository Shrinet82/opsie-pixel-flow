
const Tools = () => {
  const tools = [
    { name: "Retool", color: "bg-orange-500" },
    { name: "n8n", color: "bg-red-500" },
    { name: "Notion", color: "bg-black" },
    { name: "Zapier", color: "bg-orange-600" },
    { name: "Google Workspace", color: "bg-blue-500" },
    { name: "Airtable", color: "bg-yellow-500" },
    { name: "OpenAI", color: "bg-green-600" },
    { name: "Slack", color: "bg-purple-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
            Tools We <span className="text-primary-500">Master</span>
          </h2>
          <p className="text-xl text-midnight-600 max-w-2xl mx-auto">
            We speak fluent automation across all your favorite platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="group pixel-shadow hover:pixel-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`${tool.color} text-white px-6 py-3 rounded-lg font-sora font-semibold text-sm flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300`}>
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-midnight-500 font-medium">
            + Whatever tools you're already using
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;

import { useState } from 'react';
import axios from 'axios';

const ContentForm = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setOutput(res.data.choices[0].message.content);
    } catch (error) {
      setOutput('Error generating content.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-xl">
      <textarea
        className="w-full p-3 border rounded-xl"
        rows={5}
        placeholder="Enter your content idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-3 w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      {output && (
        <div className="mt-4 p-4 bg-gray-100 rounded-xl whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
};

export default ContentForm;

import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";


function TaskPage() {
  const [searchParams] = useSearchParams();
    const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6 ">
          <button className="absolute left-0 top-0 bottom-0 mb-6 text-slate-50" onClick={() => navigate(-1)}>
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;

import { useEffect,useState } from "react";
import { Link ,useNavigate} from "react-router";
import {api} from '../services/api.ts';
import { useAppDispatch } from "../app/hooks.ts";
import {logout} from '../features/auth/authSlice.ts'

const Dashboard = () => {

    const [projects,setProjects] = useState<any[]>([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const createProject = async () => {

     try {
      const res = await api.post("/projects", {
        title,
        description
      });

      setProjects(prev => [res.data, ...prev]);
      setTitle("");
      setDescription("");
     }
     catch(err) {
      console.error(err);
     }

    }

    const deleteProject = async (id:string) => {
        
       try {
        console.log("called");
        const res = await api.delete(`/projects/${id}`);
        console.log(res);
        setProjects(prev => prev.filter(p => p._id !== id));
        console.log("reached here");

       }
       catch (error) {
        console.error(error);
       }
    }

    const updateProject = async (id:string,title:string,description:string) => {
     
      try {
       const res = await api.put(`/projects/${id}`,{
        title,
        description
       });

       setProjects(prev => prev.map(p => p.id === id? res.data:p));
      }
      catch(error) {
       console.error(error);
      }

    }

    // useEffect(() => {
    //     console.log('called first');
    //     api.get('/profile').then(res => console.log(res.data)).catch(err => console.error(err));
    // })

    useEffect(() => {
        api.get("/projects").then(res => setProjects(res.data)).catch(err => {
            if(err.response?.status === 401) {
                dispatch(logout());
                navigate("/login");
            }
        })
    },[dispatch,navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
         Dashboard
        </h1>
        <Link to="/login" className="text-blue-600 underline">
        Logout (temporary)
        </Link>


 <div className="mb-6">
  <input
    className="border p-2 mr-2"
    placeholder="Project title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    className="border p-2 mr-2"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <button
    className="bg-blue-500 text-white px-4 py-2"
    onClick={createProject}
  >
    Create
  </button>
</div>

<ul>
  {projects.map((project) => (
    <li key={project._id} className="border p-2 mb-2">
      <strong>{project.title}</strong>
      <p>{project.description}</p>
     
     <button
      className="bg-red-500 text-white px-2 py-1 mt-2"
      onClick={() => deleteProject(project._id)}
    >
      Delete
    </button>

    </li>
  ))}
</ul>


        </div>
    )
}

export default Dashboard;
import { fetchingProjectsStart, fetchingProjectsSuccess, fetchingProjectsFailed } from './context/projectContextActions';
import { notify } from './components/UI/Notification';
import { customAxios } from './customAxios';
import { showModal } from './components/UI/Modal';
import MessageSuccess from './components/UI/MessageSuccess';

export const fetchProjects = async dispatch => {
  dispatch(fetchingProjectsStart());

  try {
    const res = await customAxios.get('/projects');
    dispatch(fetchingProjectsSuccess(res.data))
  } catch (error) {
    dispatch(fetchingProjectsFailed(error))
    notify('Network error!', 'Danger');
  }
}

export const fetchProject = async (slug, setProject, setLoading) => {
  setLoading(true);
  try {
    const res = await customAxios.get(`projects/${slug}`);
    setProject(res.data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    notify('Network error!', 'Danger');
    setLoading(false);
  }
}

export const sendMail = async (data, setLoading) => {
  try {
    setLoading(true);
    await customAxios.post('/email', data);
    setLoading(false);
    showModal(<MessageSuccess />);
  } catch (error) {
    console.log(error);
    setLoading(false);
    notify('Network error!', 'Danger');
  }
}
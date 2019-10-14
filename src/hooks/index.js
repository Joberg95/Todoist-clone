import { useSate, useEffectt } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from '../helpers';

const collatedTasks = () => {};

export const useTasks = selectedProject => {
  // initializes the state with an empty array;
  // for example users becomes userState;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "123456");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject == "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, [selectedProject]);
};

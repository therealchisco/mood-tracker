import { useEffect, useState } from "react";
import moodService, { Mood } from "../services/moodService";

const useUsers = () => {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [error, setError] = useState("");
  const [mood, setMood] = useState(4);

  useEffect(() => {
    const { request, cancel } = moodService.getAll<Mood>();
    request
      .then((res) => setMoods(res.data))
      .catch((err) => setError(err.message));
    return () => cancel();
  }, []);

  return { mood, moods, error, setMood, setMoods, setError };
};

export default useUsers;

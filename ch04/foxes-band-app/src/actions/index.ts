import axios, { AxiosResponse } from "axios";
import { SongType } from "../loaders";
import { ActionFunction, ActionFunctionArgs, redirect } from "react-router-dom";

export type AddSongType = { title: string; musician: string; youtube_link: string };

type AddSongReturnType = {
  status: string;
  message: string;
  item: SongType;
};

export type ActionError = { message: string };

export const addSongAction: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const requestData = {
    title: formData.get("title"),
    musician: formData.get("musician"),
    youtube_link: formData.get("youtube_link"),
  };

  const response = await axios.post<AddSongReturnType, AxiosResponse<AddSongReturnType>>("/songs_long", requestData);
  if (response.data.status === "success") {
    return redirect("/songs");
  } else {
    const error: ActionError = {
      message: response.data.message,
    };
    return error;
  }
};

type UpdateSongParam = { id: number };

export const updateSongAction: ActionFunction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const updateParam = params as unknown as UpdateSongParam;

  const requestData = {
    title: formData.get("title"),
    musician: formData.get("musician"),
    youtube_link: formData.get("youtube_link"),
  };

  const response = await axios.put<AddSongReturnType, AxiosResponse<AddSongReturnType>>(`/songs/${updateParam.id}`, requestData);
  if (response.data.status === "success") {
    return redirect("/songs");
  } else {
    const error: ActionError = {
      message: response.data.message,
    };
    return error;
  }
};

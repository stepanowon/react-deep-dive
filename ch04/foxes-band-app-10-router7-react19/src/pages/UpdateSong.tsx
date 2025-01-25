import { Await, Form, useActionData, useAsyncValue, useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { ActionError } from "../actions";
import { SongType } from "../loaders";
import React from "react";
import { ReactCsspin } from "react-csspin";

const UpdateSong = () => {
  const navigate = useNavigate();

  const error = useActionData() as ActionError;
  const song = useAsyncValue() as SongType;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h2 className="m-5">곡 정보 변경</h2>
      <Form method="post">
        <input type="hidden" id="id" name="id" defaultValue={song.id} />
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="title" name="title" defaultValue={song.title} />
          <label htmlFor="title">곡 제목</label>
        </div>
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="musician" name="musician" defaultValue={song.musician} />
          <label htmlFor="musician">원곡 가수</label>
        </div>
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="youtube_link" name="youtube_link" defaultValue={song.youtube_link} />
          <label htmlFor="youtube_link">유튜브 링크</label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary m-1" disabled={isSubmitting}>
          {isSubmitting ? "업데이트 처리중" : "업데이트"}
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/songs")} disabled={isSubmitting}>
          취소
        </button>
        {error ? (
          <div className="card mt-5">
            <div className="card-body">{error.message}</div>
          </div>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
};

type DeferredOneSongDataType = { song: Promise<SongType> };

const UpdateSongSuspense = () => {
  const data = useLoaderData() as DeferredOneSongDataType;

  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.song}>
        <UpdateSong />
      </Await>
    </React.Suspense>
  );
};
export { UpdateSongSuspense };

export default UpdateSong;

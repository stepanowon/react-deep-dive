import { Form, useActionData, useNavigate, useNavigation } from "react-router-dom";
import { ActionError } from "../actions";

const AddSong = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const error = useActionData() as ActionError;

  return (
    <div>
      <h2 className="m-5">새로운 곡 추가</h2>
      <Form method="post">
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="title" name="title" />
          <label htmlFor="title">곡 제목</label>
        </div>
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="musician" name="musician" />
          <label htmlFor="musician">원곡 가수</label>
        </div>
        <div className="form-floating mb-2">
          <input type="text" className="form-control" id="youtube_link" name="youtube_link" defaultValue={"PABUl_EX_hw"} />
          <label htmlFor="youtube_link">유튜브 링크</label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary m-1" disabled={isSubmitting}>
          {isSubmitting ? "저장 처리 중" : "추가"}
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

export default AddSong;

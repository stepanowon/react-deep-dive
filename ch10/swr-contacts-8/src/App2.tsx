import { ReactCsspin } from "react-csspin";
import ContactList2 from "./ContactList2";
import { fetchContactList, type ContactItemType, type ContactListType } from "./apis/ContactAPI";
import useSWRInfinite from "swr/infinite";

const App2 = () => {
  const getKey = (pageIndex: number, previousPageData: ContactListType | null): string | null => {
    if (pageIndex === 0) return `/contacts_long?pageno=1`; // 첫 번째 페이지 (pageIndex가 0일 때 pageno=1로 요청)
    if (!previousPageData) return null; // 이전 페이지 데이터가 null이면 더 이상 로드하지 않음
    if (previousPageData.contacts.length === 0) return null; // 이전 페이지에 연락처가 없으면 더 이상 로드하지 않음
    const totalLoaded = pageIndex * previousPageData.pagesize + previousPageData.contacts.length; // 현재까지 로드된 총 연락처 수 계산
    if (totalLoaded >= previousPageData.totalcount) return null; // 모든 데이터를 로드했는지 확인
    return `/contacts_long?pageno=${pageIndex + 2}`; // 다음 페이지 번호 계산 (pageIndex + 2, 왜냐하면 pageIndex는 0부터 시작하고 pageno는 1부터 시작)
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetchContactList, {
    revalidateFirstPage: false, // 첫 페이지 재검증 방지
    revalidateAll: false, // 모든 페이지 재검증 방지
  });

  // 모든 페이지의 연락처를 하나의 배열로 합치기
  const contacts: ContactItemType[] = data ? data.flatMap((pageData) => pageData.contacts) : [];

  // 로딩 상태 계산
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.contacts?.length === 0;
  const isReachingEnd = isEmpty || (data && data.length > 0 && contacts.length >= data[0].totalcount);

  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };

  return (
    <div>
      <ContactList2 contacts={contacts} />
      {/* 상태 정보 표시 */}
      {data && data[0] && (
        <div>
          총 {data[0].totalcount}개 중 {contacts.length}개 로드됨
        </div>
      )}

      {/* 더 보기 버튼 */}
      {!isReachingEnd && (
        <div>
          <button onClick={loadMore} disabled={isLoadingMore}>
            {isLoadingMore ? "로딩 중..." : "다음 5개 읽어오기"}
          </button>
        </div>
      )}

      {/* 끝에 도달했을 때 메시지 */}
      {isReachingEnd && !isEmpty && <div>모든 연락처를 불러왔습니다.</div>}
      {error ? <div>로딩 에러 : {error.message}</div> : ""}
      {isLoading ? <ReactCsspin opacity={0.8} message="로딩중" /> : ""}
    </div>
  );
};

export default App2;

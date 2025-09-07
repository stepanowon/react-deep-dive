# React Deep Dive 과정 예제
---
#### 최종 수정 날짜 : 2025.08.20
#### 최종 검토 날짜 : 2025.08.20

---
## 주의사항
* react-router v7에서는 defer 객체를 더이상 사용하지 않음
~~~
// react-router v6
export const membersLoader = async () => {
    const promiseMembers: Promise<MemberType[]> = 
        axios.get<MemberType[], AxiosResponse<MemberType[]>>("/members_long")
            .then((response)=>response.data);
    return defer({ members:  promiseMembers })
}

// react router v7
export const membersLoader = async () => {
    const promiseMembers: Promise<MemberType[]> = 
        axios.get<MemberType[], AxiosResponse<MemberType[]>>("/members_long")
            .then((response)=>response.data);
    return { members:  promiseMembers }
}
~~~

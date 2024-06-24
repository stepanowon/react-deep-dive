import Error from "./Error";

type PropsCommon = { children: string | JSX.Element | JSX.Element[]; };
type Props1 = PropsCommon & { name: string; };
type Props2 = PropsCommon & { nick: string; };
type Props = Props1 | Props2;

const TestComponent = (props: Props) => {
    if ("name" in props || "nick" in props ) {
        return props.children
    }
    return <Error />;
};

export default TestComponent;

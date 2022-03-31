
import {useState , useEffect} from 'react';
import Movie from '../components/Movie';
const Home = () => {
  
  const [loading , setLoading] = useState(true);
  const [movies , setMovies] = useState([]);
  const getMovies = async () => {
    const response  = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
  }
  useEffect(() => {
    getMovies();
    setLoading(false);
  },[]);
 
  return (
    <div className="App">
      {loading ? <h3>Loading...</h3> : 
        movies?.map((data)=>
        <Movie data = {data} key={data.id}/>
      )}

    </div>
    
  );
}
export default Home;

// ReactJs -> element를 생성하고 event listener를 더하는 것을 도와줌
// ReactDom -> ReactElement를 HTML로 만들어줌
// Babel -> JSX를 브라우저가 알 수 있는 형태의 ReactJs로 변환해줌.

// 리액트 컴포넌트는 무조건 맨 앞글자가 대문자여야 한다.
// 소문자로 시작하면 그냥 HTML 태그로 읽어버림
// 화살표 함수는 
// hello = () => 'hello'; 
// 아래의 함수와 같은 의미이다.
// function hello(){ return 'hello' }

// state는 기본적으로 데이터가 저장되는 곳.

// ReactJs는 이전에 렌더링된 컴포넌트가 어떤건지 확인함
// 그리고 다음에 렌더링될 컴포넌트는 어떤건지 다른부분만 파악해서 업데이트함.

// 화살표함수 =>
// 	const Box = () => ( ) 소괄호일경우 반환한다는 의미
// 	const Box = () => {} return을 사용해야함

// 리액트JS에서 데이터를 저장시켜 자동으로 리렌더링을 일으킬 수 있는 방법
// const data = React.useState();를 console.log 시키면
// [undefined, f ] -> undefined와 함수가 적힌 배열이 나타남
// undefined는 data이고 f는 data를 바꿀 때 사용하는 함수
// React.useState() 함수는 초기값을 설정할 수 있음
// 즉, undefined는 초기값이고 두 번째 요소인 f는 그 값을 바꾸는 함수

// 배열을 꺼내기
// const x = [1, 2, 3]
// const [a, b, c] = x;
// 으로 꺼낼 수 있음

// React에서 inputd은 uncontrolled라고 불린다 제어불가능 하기 떄문.

// 1. Prop 은 component 에 보내지는 argument 입니다.
// 2. PropType을 이용해서 보내지는 prop 에 type을 정의 할수 있습니다. 정
// 의 하는 이유는 잘못된 type의 prop 이 보내지는 것을 방지하기 위해서 입니다
// . PropType을 정의 했을때 React는 에러메세지를 통해서 잘못된 type이 보내지고 있다고 알려줍니다.
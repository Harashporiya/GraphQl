import './App.css';
import {gql, useQuery } from '@apollo/client';


const query =gql`
 query GetTodosWithUser{
     getTodos{
        title
        id
       user{
       id
       name
       username
       email
       website
       phone
       }
     }
 }
`

function App() {
  const {data, loading} = useQuery(query)
  if(loading){
    return <h1>Loading....</h1>
  }
  console.log(data)
  return (
    <div className="App">
    <table border={1}>
      <thead>
        <th>Todo Id</th>
        <th>Todo Title</th>
        <th>Users Id</th>
        <th> Name</th>
        <th>Username</th>
        <th>Users Email</th>
        <th>Website</th>
        <th>Users Phone numbers</th>
      </thead>
      <tbody>
        {
          data.getTodos.map(todo=><tr key={todo}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo?.user?.id}</td>
            <td>{todo?.user?.name}</td>
            <td>{todo?.user?.username}</td>
            <td>{todo?.user?.email}</td>
            <td>{todo?.user?.website}</td>
            <td>{todo?.user?.phone}</td>
          </tr>)
        }
      </tbody>
    </table>
    </div>
  );
}

export default App;

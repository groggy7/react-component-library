import Badge from "./components/badge"
import Banner from "./components/banner"

function App() {
  return (
    <>
      <Badge variant="square" color="indigo">Badge</Badge>
      <Badge variant="square" color="green">Badge</Badge>
      <Badge variant="pill" color="red">Badge</Badge>
      <Badge variant="pill" color="yellow">Badge</Badge>
      <Banner variant="success" header="Congratulations!" isSingleLine={false}>Hi, this is a success message</Banner>
      <Banner variant="error" header="Something went wrong!" isSingleLine={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quisquam eligendi et incidunt distinctio dolorem nam corporis dignissimos inventore, facere quasi? Distinctio laboriosam totam repellendus, omnis mollitia dolores ab iusto.</Banner>
      <Banner variant="warning" header="Attention" isSingleLine={true}></Banner>
      <Banner header="Update available" isSingleLine={true}></Banner>
    </>
  );
}

export default App;
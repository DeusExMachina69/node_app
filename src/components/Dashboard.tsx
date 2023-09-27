interface Props {
  User: string;
}

function Dashboard({User}: Props) {
  return (
    <>
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Welcome, { User }!</h1>
      </div>
    </>
      );
}


export default Dashboard; 

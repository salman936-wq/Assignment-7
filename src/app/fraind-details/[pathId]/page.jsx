import FraindInfoDesign from "../FraindInfoDesign/FraindInfoDesign";

const UserInfoPage = async({ params }) => {
  const {pathId} = await params;

  
  const res = await fetch("http://localhost:3000/friends.json");

  const friends = await res.json();
  const friend = friends.find(friend => friend.id == pathId);

  


  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-5xl mx-auto">

        <FraindInfoDesign friend={friend}></FraindInfoDesign>

      </div>
    </main>
  );




};


export default UserInfoPage;
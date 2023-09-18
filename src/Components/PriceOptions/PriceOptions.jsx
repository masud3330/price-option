import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    
     const   gym_members= [
          {
            "member_id": 1,
            "name": "John Smith",
            "membership_price": 79.99,
            "features": [
              "Unlimited access to gym equipment",
              "Access to group fitness classes",
              "Personalized workout plans",
              "Monthly fitness assessment"
            ]
          },
          {
            "member_id": 2,
            "name": "Alice Johnson",
            "membership_price": 89.99,
            "features": [
              "Unlimited access to gym equipment",
              "Access to group fitness classes",
              "One-on-one personal training",
              "Nutritional guidance"
            ]
          },
          {
            "member_id": 3,
            "name": "Emily Davis",
            "membership_price": 69.99,
            "features": [
              "Unlimited access to gym equipment",
              "Access to group fitness classes",
              "Online workout tracking",
              "Monthly fitness assessment"
            ]
          }
        ]
     
      
    return (
        <div className="grid md:grid-cols-3 gap-4 mx-12">
            {
                gym_members.map(member => <PriceOption key={member.member_id}  member={member}></PriceOption>)
            }
            
        </div>
    );
};

export default PriceOptions;
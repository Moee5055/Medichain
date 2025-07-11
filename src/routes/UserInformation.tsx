import { Droplet, Ruler, Weight, Calendar } from "lucide-react";

interface UserInfo {
  name: string;
  age: number;
  bloodGroup: string;
  height: string;
  weight: string;
  avatar?: string;
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, label, value, color }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:scale-105">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const UserInformation: React.FC = () => {
  const userData: UserInfo = {
    name: "Alex Johnson",
    age: 28,
    bloodGroup: "O+",
    height: "5'9\"",
    weight: "72 kg",
  };

  const infoCards = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      label: "Age",
      value: `${userData.age} years`,
      color: "bg-blue-50",
    },
    {
      icon: <Droplet className="w-6 h-6 text-red-600" />,
      label: "Blood Group",
      value: userData.bloodGroup,
      color: "bg-red-50",
    },
    {
      icon: <Ruler className="w-6 h-6 text-green-600" />,
      label: "Height",
      value: userData.height,
      color: "bg-green-50",
    },
    {
      icon: <Weight className="w-6 h-6 text-purple-600" />,
      label: "Weight",
      value: userData.weight,
      color: "bg-purple-50",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 sm:p-6">
      {/* Stats Section */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;

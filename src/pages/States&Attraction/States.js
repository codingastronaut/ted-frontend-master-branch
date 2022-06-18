import StateCard from "src/components/StateCard";
import Box from "src/components/Box";
import Typography from "src/components/Typography";
import Layout, { VARIANTS } from "src/components/layout";

const States = () => {
  const states = [
    {
      state: "Abia State",
      stateTitle: "God’s own State",
      capital: "Umuahia",
    },
    {
      state: "Adamawa State",
      stateTitle: "New Slogan: Highest peak of the nation",
      capital: "Yola",
    },
    {
      state: "Akwa Ibom State",
      stateTitle: "Land of promise",
      capital: "Uyo",
    },
    {
      state: "Anambra State",
      stateTitle: "New slogan: Light of the nation",
      capital: "Awka",
    },
    {
      state: "Bauchi State",
      stateTitle: "Pearl of Tourism",
      capital: "Bauchi",
    },
    {
      state: "Bayelsa State",
      stateTitle: "The Glory of All Lands",
      capital: "Yenagoa",
    },
    {
      state: "Benue State",
      stateTitle: "Food basket of the Nation",
      capital: "Makurdi",
    },
    {
      state: "Borno State",
      stateTitle: "Home of peace",
      capital: "Maiduguri",
    },
    {
      state: "Cross River State",
      stateTitle: "The people’s paradise",
      capital: "Calabar",
    },
    {
      state: "Delta State",
      stateTitle: "New slogan: The Finger of God",
      capital: "Asaba",
    },
    {
      state: "Ebonyi State",
      stateTitle: "The salt of the Nation",
      capital: "Abakaliki",
    },
    {
      state: "Edo State",
      stateTitle: "The Heart Beat of the Nation",
      capital: "Benin City",
    },
    {
      state: "Ekiti State",
      stateTitle: "New slogan: Land of honour and integrity",
      capital: "Ado – Ekiti",
    },
    {
      state: "Enugu State",
      stateTitle: "Coal City State",
      capital: "Enugu",
    },
    {
      state: "Gombe State",
      stateTitle: "Jewel in the Savannah",
      capital: "Gombe",
    },
    {
      state: "Imo State",
      stateTitle: "Formerly Land of Hope, new slogan is Eastern heartland",
      capital: "Owerri",
    },
    {
      state: "Jigawa State",
      stateTitle: "The New World",
      capital: "Dutse",
    },
    {
      state: "Kaduna State",
      stateTitle: "Formerly Liberal State, new slogan is Centre of learning",
      capital: "Kaduna",
    },
    {
      state: "Kano State",
      stateTitle: "Centre of Commerce",
      capital: "Kano",
    },
    {
      state: "Katsina State",
      stateTitle: "State of Hospitality",
      capital: "Katsina",
    },
    {
      state: "Kebbi State",
      stateTitle: "Land of Equity",
      capital: "Birnin Kebbi",
    },
    {
      state: "Kogi State",
      stateTitle: "The Confluence State",
      capital: "Lokoja",
    },
    {
      state: "Kwara State",
      stateTitle: "State of Hospitality",
      capital: "Katsina",
    },

    {
      state: "Lagos State",
      stateTitle: "Centre of Excellence",
      capital: "Ikeja",
    },
    {
      state: "Nasarawa State",
      stateTitle: "The home of Solid Minerals",
      capital: "Lafia",
    },
    {
      state: "Niger State",
      stateTitle: "The power State",
      capital: "Minna",
    },
    {
      state: "Ogun State",
      stateTitle: "The Gateway State",
      capital: "Abeokuta",
    },
    {
      state: "Ondo State",
      stateTitle: "The sunshine State",
      capital: "Akure",
    },
    {
      state: "Osun State",
      stateTitle: "",
      capital: "Oshogbo",
    },
    {
      state: "Oyo State",
      stateTitle: "The pace setter State",
      capital: "Ibadan",
    },
    {
      state: "Plateau State",
      stateTitle: "Home of peace and tourism",
      capital: "Jos",
    },
    {
      state: "Rivers State",
      stateTitle: "Treasure base of the Nation",
      capital: "Port Harcourt",
    },
    {
      state: "Sokoto State",
      stateTitle: "The seat of the Caliphate",
      capital: "Sokoto",
    },
    {
      state: "Taraba State",
      stateTitle: "Nature’s gift to the Nation",
      capital: "Jalingo",
    },

    {
      state: "Yobe State",
      stateTitle: "New slogan: Pride of the sahel",
      capital: "Damaturu",
    },
    {
      state: "Zamfara State",
      stateTitle: "New slogan: Farming is our pride",
      capital: "Gusau",
    },
  ];

  return (
    <>
      <Layout variant={VARIANTS.NINTHLAYOUT}>
        <Box textAlign="center" mt="15.938rem" mb="12rem">
          <Typography variant="h1">States & Attractions</Typography>
        </Box>
        <Box
          display="grid"
          gridGap="1rem"
          gridTemplateColumns={{
            _: "auto",
            tabletL: "auto auto",
            desktop: "auto auto auto",
          }}
          flexWrap="wrap"
          justifyContent="center"
          gridGap="2.5rem"
          mb="12.5rem"
        >
          {states.map((item) => {
            return <StateCard item={item} />;
          })}
        </Box>
      </Layout>
    </>
  );
};

export default States;

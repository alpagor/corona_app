import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //try will be executed if the fetch is succesful
  try {
    const {
      data: { confirmed, recovered, deaths, lastupdate },
    } = await axios.get(url);

    // const modifiedData = {
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastupdate,
    // };
    // as we return and use the const modifedData inmediately we can just
    // return it wthout storing it on a variable

    // return modifiedData;

    return { confirmed, recovered, deaths, lastupdate };
  } catch (error) {}
};

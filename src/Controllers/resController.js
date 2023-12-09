import initModels from "../Models/init-models.js";
import sequelize from "../Models/connect.js";

import { responseData } from "../Configs/Respone.js";
import like_res from "../Models/like_res.js";

let model = initModels(sequelize);

export const gettRes = async (req, res) => {
  try {
    // let data = "";
    let data = await model.restaurant.findAll();
    responseData(res, data, "Thanh cong", 200);
  } catch {
    responseData(res, "Lỗi ...", "", 500);
  }
};
export const getResId = async (req, res) => {
  try {
    // let data = "";
    let { res_id } = req.params;
    let data = await model.restaurant.findOne({
      where: {
        res_id,
      },
    });
    responseData(res, data, "Thanh cong", 200);
  } catch {
    responseData(res, "Lỗi ...", "", 500);
  }
};

export const getCountLikeByRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    let countlike = await model.like_res.count({
      where: { res_id },
    });
    responseData(res, countlike, "Thanh cong", 200);
  } catch {
    responseData(res, "Lỗi ...", "", 500);
  }
};
export const likeRes = async (req, res) => {
  try {
    let { res_id, user_id } = req.body;
    let data = await model.like_res.findOne({
      where: {
        user_id,
        res_id,
      },
    });
    if (data) {
      responseData(res, data, "Da like nha hang", 400);
    } else {
      let newLike = await like_res.create({
        user_id,
        like_res: "1",
        date_like: new Date(),
        timestamp: new Date(),
      });
      responseData(res, newLike, "Thanh cong", 200);
    }
  } catch {
    responseData(res, "Lỗi ...", "", 500);
  }
};

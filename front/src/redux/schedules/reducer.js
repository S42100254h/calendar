import { PlaylistAddOutlined } from "@material-ui/icons";
import { SCHEDULES_ADD_ITEM } from "./actions";

const init = {
  items: [],
  isLoading: false
};

const schedulesReducer = (state = init, action) => {
  switch (action.type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...payload }]
      };  
    default:
      return state;
  }
};

export default schedulesReducer;

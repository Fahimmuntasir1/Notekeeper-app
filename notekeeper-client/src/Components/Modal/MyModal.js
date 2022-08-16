import React from "react";

const MyModal = ({ _id }) => {
  console.log(_id);
  return (
    <div>
      <input type="checkbox" id={_id} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for={_id} class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;

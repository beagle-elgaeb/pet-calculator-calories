import { useState } from "react";
import Form from "./Form";
import { LinkToCalc, ProfileContainer } from "./Profile.styles";
import SavedProfile from "./SavedProfile";

function Profile() {
  const [editedForm, setEditedForm] = useState(false);

  return (
    <ProfileContainer>
      {editedForm ? (
        <Form setEditedForm={setEditedForm} />
      ) : (
        <SavedProfile setEditedForm={setEditedForm} />
      )}
      <LinkToCalc to="/">К калькулятору</LinkToCalc>
    </ProfileContainer>
  );
}

export default Profile;

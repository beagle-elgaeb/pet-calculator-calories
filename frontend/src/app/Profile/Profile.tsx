import { useState } from "react";
import { ProfileProps } from "../../utils/types";
import Form from "./Form";
import { LinkToCalc, ProfileContainer } from "./Profile.styles";
import SavedProfile from "./SavedProfile";

function Profile({ loadProfile }: ProfileProps) {
  const [editedForm, setEditedForm] = useState(false);

  return (
    <ProfileContainer>
      {editedForm ? (
        <Form setEditedForm={setEditedForm} loadProfile={loadProfile} />
      ) : (
        <SavedProfile setEditedForm={setEditedForm} />
      )}
      <LinkToCalc to="/">К калькулятору калорий</LinkToCalc>
    </ProfileContainer>
  );
}

export default Profile;

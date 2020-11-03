import { useQuery, gql } from "@apollo/client";

const USER_QUERY = gql`
  query viewer {
    viewer {
      avatarUrl
			name
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(USER_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <img
        src={data.viewer.avatarUrl}
        alt="Avatar"
        style={{ borderRadius: 50, width: 100, height: 100 }}
      />
      <p>{data.viewer?.name}</p>
    </div>
  );
}

export default Profile;

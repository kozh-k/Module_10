import type { User } from "../../types/userType";
import UserPreview from "../UserPreview/UserPreview";
import styles from "./SuggestionSection.module.css";

interface Community {
   name: string;
   avatar: string;
   membersQuantity: number;
}

interface SuggestionSectionProps {
   users: Omit<User, "isLoggedIn" | "id">[];
   communities: Community[];
}

export default function SuggestionSection({
   users,
   communities,
}: SuggestionSectionProps) {
   return (
      <aside className={styles.suggestionSection}>
         <section className={styles.suggestedPeople}>
            <h2>Suggested people</h2>
            {users
               ? users.map((user) => {
                    return (
                       <UserPreview
                          username={user.name}
                          avatar={user.avatar}
                          attachment={user.handle}
                          style={{padding: '12px 0'}}
                       />
                    );
                 })
               : null}
         </section>
         <section className={styles.suggestedCommunities}>
            <h2>Communities you might like</h2>
            {communities
               ? communities.map((community) => {
                    return (
                       <UserPreview
                          username={community.name}
                          avatar={community.avatar}
                          attachment={community.membersQuantity + " members"}
                          style={{padding: '12px 0'}}
                       />
                    );
                 })
               : null}
         </section>
      </aside>
   );
}

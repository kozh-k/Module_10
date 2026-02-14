import Header from "@/components/Header/Header";
import PostCreator from "@/components/PostCreator/PostCreator";
import Post from "@/components/Post/Post";
import Footer from "@/components/Footer/Footer";
import SuggestionSection from "@/components/SuggestionSection/SuggestionSection";
import styles from "@/pages/HomePage/HomePage.module.css";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { posts } from "@/data/posts";
import { suggestedUsers } from "@/data/suggestedUsers";
import { suggestedCommunities } from "@/data/suggestedCommunities";

function HomePage() {
   const user = useContext(UserContext);

   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={true} />
         <main className={styles.main}>
            <div className={user.isLoggedIn ? styles.postsContainer : ""}>
               {user.isLoggedIn ? <PostCreator /> : null}
               {posts.map((post) => {
                  return (
                     <Post
                        owner={post.owner}
                        date={post.date}
                        image={post.image}
                        description={post.description}
                        likesQuantity={post.likesQuantity}
                        comments={post.comments}
                     />
                  );
               })}
            </div>
            {user.isLoggedIn ? (
               <SuggestionSection
                  users={suggestedUsers}
                  communities={suggestedCommunities}
               />
            ) : null}
         </main>
         <Footer />
      </div>
   );
}

export default HomePage;

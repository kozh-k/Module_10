import Header from "../../components/Header/Header";
import PostCreator from "../../components/PostCreator/PostCreator";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import SuggestionSection from "../../components/SuggestionSection/SuggestionSection";
import styles from "./HomePage.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

function HomePage() {
   const user = useContext(UserContext);

   return (
      <div className={styles.wrapper}>
         <Header isNavigationVisible={true} />
         <main className={styles.main}>
            <div className={styles.postsContainer}>
               <PostCreator />
               <Post
                  postTime="3 min ago"
                  image="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg"
                  description="Post description"
                  likesQuantity={10}
                  comments={["first", "second"]}
               />
               <Post
                  postTime="3 min ago"
                  description="Post description"
                  likesQuantity={10}
                  comments={["first", "second"]}
               />
            </div>
            {user.isLoggedIn ? (
               <SuggestionSection
                  users={[
                     {
                        name: "Name Surname",
                        avatar:
                           "https://innostudio.de/fileuploader/images/default-avatar.png",
                        handle: "@namesurname",
                     },
                     {
                        name: "Name Surname",
                        avatar:
                           "https://innostudio.de/fileuploader/images/default-avatar.png",
                        handle: "@namesurname",
                     },
                     {
                        name: "Name Surname",
                        avatar:
                           "https://innostudio.de/fileuploader/images/default-avatar.png",
                        handle: "@namesurname",
                     },
                  ]}
                  communities={[
                     {
                        name: "Name Surname",
                        avatar:
                           "https://innostudio.de/fileuploader/images/default-avatar.png",
                        membersQuantity: 100,
                     },
                     {
                        name: "Name Surname",
                        avatar:
                           "https://innostudio.de/fileuploader/images/default-avatar.png",
                        membersQuantity: 100,
                     },
                  ]}
               />
            ) : null}
         </main>
         <Footer />
      </div>
   );
}

export default HomePage;

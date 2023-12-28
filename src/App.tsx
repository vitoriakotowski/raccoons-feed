import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ewcunha.png',
      name: 'Eduardo da Cunha',
      role: 'Solidity Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone! 👋' },

      { type: 'paragraph', content: "Just uploaded another project to my portfolio. It's a project I created during the NLW Return, a Rocketseat event. The project's name is DoctorCare 🚀" },

      { type: 'link', content: '👉 jane.design/doctorcare' },

      { type: 'link', content: '#newproject' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2023-12-18 20:34:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/vitoriakotowski.png',
      name: 'Vitoria Kotowski',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hey everyone! 👋' },

      { type: 'paragraph', content: "Just uploaded another project to my portfolio. It's a project I created during the NLW Return, a Rocketseat event. The project's name is DoctorCare 🚀" },

      { type: 'link', content: '👉 jane.design/doctorcare' },

      { type: 'link', content: '#newproject' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#rocketseat' }
    ],
    publishedAt: new Date('2023-12-18 20:33:00')
  }
];

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App

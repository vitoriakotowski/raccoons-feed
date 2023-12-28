import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/vitoriakotowski.png' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitoria Kotowski</strong>
                            <time title='17 de dezembro às 15:19h' dateTime='2023-12-17 15:19:00'>Publicado há 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp onClick={handleLikeComment} />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
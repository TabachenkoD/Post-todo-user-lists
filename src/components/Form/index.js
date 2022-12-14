import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../../store/features/postSlice';

import styles from './style.module.css';

const Form = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.post);

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data) => {
        dispatch(addNewPost(data));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='title' className={styles.titles}>Title:</label>
            <input className={styles.input} placeholder='Enter post title. (Max. length 50 symbols)'
                {...register('title', {
                    required: 'Field is required',
                    maxLength: {
                        value: 50,
                        message: 'Max. length 50 symbols!',
                    },
                })} />

            <div>
                {errors?.title && <p>{errors?.title?.message || 'Error!'}</p>}
            </div>
            <label htmlFor='post' className={styles.titles}>Post:</label>
            <textarea placeholder='Enter your post. (Max. length 300 symbols)'
                {...register('post', {
                    required: 'Field is required',
                    maxLength: {
                        value: 300,
                        message: 'Max. length 300 symbols!',
                    }
                })}></textarea>
            <div className='error'>
                {errors?.post && <p>{errors?.post?.message || 'Error!'}</p>}
            </div>
            <button type='submit' disabled={!isValid}>Submit</button>
            {
                !loading && error ? (
                    <p className="error" style={{ textAlign: "center" }}>{error}</p>
                ) : null
            }
        </form>
    )
}

export default Form;
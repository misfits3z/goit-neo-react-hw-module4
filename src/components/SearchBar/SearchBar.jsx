import { Field, Form, Formik} from "formik";


export default function SearcBar ({search}){
    const handleSubmit = (values, actions) => {
		search(values.query)
		actions.resetForm()
    }
    return(
        <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
			<Form>
				<Field name='query' type='text'/>
				<button type='submit'>Search</button>
			</Form>
		</Formik>

    )
}

// export default function SearcBar ({search}){
//     const handleSubmit = (values, actions) => {
// 		search(values.query)
// 		actions.resetForm()
//     }
//     return(
//         <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
// 			<Form>
// 				<Field name='query' type='text' autocomplete="off" autofocus />
// 				<button type='submit'>Search</button>
// 			</Form>
// 		</Formik>

//     )
// }
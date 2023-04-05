export default {
  props: {
    items: Array,
  },

  render: (props) => <div>
    <h1>I'm rendered using JSX!</h1>

    <ul>
      {props.items.map(({ id, text }) => {
        return <li key={id}>{text}</li>
      })}
    </ul>
  </div>
}

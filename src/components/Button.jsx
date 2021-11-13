export default function Button({ type, background, children }) {
  const colors = (background == 'primary') ?
    'bg-blue-450 text-white' : 
    (background == 'success') ?
    'bg-green-400 text-white' : 
    (background == 'error') ?
    'bg-red-400 text-white' : 'bg-blue-450 text-white';
  const classes = `w-40 flex items-center justify-center w-min rounded py-1 px-5 hover:opacity-90 ${colors}`;
  return (
    <button
      type={type ?? "button"}
      className={classes}
    >
      {children}
    </button>
  )
}

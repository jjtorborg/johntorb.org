import * as React from "react"
const ReactIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={32}
    height={32}
    viewBox="0 0 330 305"
    {...props}
  >
    <path d="M1 110V1.021h329.914v304.833H1V110m321.984 52.193c.339-2.433.917-4.86.978-7.3.473-19.061-9.67-32.497-24.24-42.733-10.104-7.1-21.313-12.626-32.32-19.026 2.107-11.249 2.856-34.634-2.223-49.914-7.858-23.641-24.444-35.126-48.905-32.046-12.635 1.59-24.252 6.804-34.894 13.935-5.357 3.589-10.725 7.16-15.516 10.36-5.66-3.884-10.522-7.567-15.71-10.713-12.917-7.833-26.414-13.372-42.026-13.966-18.777-.715-34.598 13.16-40.3 29.192-6.395 17.98-5.321 36.208-3.262 54.454-17.244 7.164-33.284 15.676-45.737 30.086-14.656 16.96-14.062 42.135 1.321 58.294 12.585 13.219 27.671 22.15 44.26 28.52-.168 3.292-.07 6.413-.527 9.45-1.819 12.065-1.354 24.057 1.22 35.924 2.725 12.569 8.096 23.776 19.061 31.273 13.18 9.012 27.52 8.603 42.147 4.294 14.909-4.391 27.556-12.864 39.695-22.334 13.392 10.505 27.422 19.426 44.035 23.6 25.771 6.475 46.93-5.154 55.005-30.39 5.45-17.03 4.545-34.367 2.405-51.175 8.05-4.11 16.095-7.567 23.465-12.12 14.401-8.894 26.85-19.762 32.068-37.665z" />
    <path
      fill="#08dbfb"
      d="M322.952 162.615c-5.186 17.48-17.635 28.35-32.036 37.244-7.37 4.552-15.416 8.01-23.465 12.119 2.14 16.808 3.044 34.146-2.405 51.175-8.075 25.236-29.234 36.865-55.005 30.39-16.613-4.174-30.643-13.095-44.035-23.6-12.139 9.47-24.786 17.943-39.695 22.334-14.627 4.309-28.966 4.718-42.147-4.294-10.965-7.497-16.336-18.704-19.062-31.273-2.573-11.867-3.038-23.86-1.219-35.924.458-3.037.36-6.158.527-9.45-16.589-6.37-31.675-15.301-44.26-28.52-15.383-16.159-15.977-41.334-1.32-58.294 12.452-14.41 28.492-22.922 45.736-30.086-2.059-18.246-3.133-36.473 3.262-54.454 5.702-16.032 21.523-29.907 40.3-29.192 15.612.594 29.11 6.133 42.026 13.966 5.188 3.146 10.05 6.829 15.71 10.713 4.791-3.2 10.16-6.771 15.516-10.36 10.642-7.13 22.259-12.345 34.894-13.935 24.46-3.08 41.047 8.405 48.905 32.046 5.079 15.28 4.33 38.665 2.222 49.914 11.008 6.4 22.217 11.927 32.321 19.026 14.57 10.236 24.713 23.672 24.24 42.734-.061 2.44-.64 4.866-1.01 7.721m-131.232 48.52c3.325-.637 6.99 1.03 9.518-3.397 9.189-16.089 18.844-31.912 28.332-47.83 2.76-4.631 2.78-9.16 0-13.868-9.258-15.685-18.353-31.466-27.685-47.105-.988-1.657-3.026-3.576-4.748-3.757-9.506-1.003-19.059-1.876-28.61-2.068-8.76-.176-17.599.063-26.28 1.125-4.143.506-9.301-.69-12.268 4.549-8.892 15.696-18.031 31.253-27.234 46.77-2.983 5.028-3.094 9.673-.108 14.729 8.427 14.267 16.77 28.585 24.949 42.995 2.764 4.87 5.585 8.115 12.133 7.972 17.056-.372 34.132.15 52.001-.115m5.767-144.147c1.246 1.524 2.334 3.22 3.77 4.538 3.53 3.238 5.129 8.5 10.86 9.464 13.195 2.221 26.338 4.752 39.669 7.187 2.157-14.137 2.334-28.696-2.871-42.809-3.684-9.985-12.401-19.067-25.728-18.545-9.048.355-17.064 3.321-24.772 7.228-6.903 3.498-13.251 8.092-19.999 12.3 6.684 7.242 12.628 13.682 19.07 20.637m-76.103-37.997c-19.136-6.477-33.295.523-39.37 19.596-4.198 13.181-3.705 26.59-1.792 39.59 13.452-2.469 26.771-4.844 40.05-7.43 1.804-.35 3.802-1.388 5.035-2.73 8.6-9.35 17.028-18.862 25.496-28.335.826-.924 1.553-1.935 2.377-2.97-9.576-7.819-19.844-13.488-31.796-17.721M82.217 217.124c-.73.612-2.013 1.149-2.11 1.85-1.94 14.013-2.044 27.906 2.87 41.476 3.413 9.422 12.643 19.202 25.714 18.659 11.827-.492 21.87-5.42 31.706-11.112 4.451-2.575 8.571-5.724 13.04-8.748-.992-1.142-1.513-1.768-2.062-2.368-7.268-7.94-14.557-15.862-21.804-23.823-3.038-3.337-5.217-7.258-10.55-8.179-12.082-2.085-24.04-4.886-36.804-7.755m166.084.762c-9.937 2.053-19.924 3.898-29.789 6.253-4.462 1.066-9.448.506-13.047 4.804-7.426 8.87-15.273 17.388-22.957 26.041-1.183 1.332-2.422 2.614-3.898 4.202 12.156 9.337 24.768 17.043 39.608 19.581 11.143 1.906 21.019-1.302 27.248-11.703 9.2-15.36 8.326-32.095 6.304-48.92-.039-.326-1.79-.445-3.469-.258M58.422 114.896C47.746 120.19 38.18 126.9 30.382 136.06c-8.062 9.474-8.055 24.741.134 33.986 10.148 11.456 22.684 19.293 36.871 24.886.534-.981 1.144-1.791 1.445-2.703 4.143-12.57 8.275-25.144 12.302-37.752.34-1.067.185-2.476-.2-3.563-2.296-6.478-4.891-12.854-7.067-19.37-2.257-6.758-4.153-13.637-6.259-20.637-3.149 1.308-5.856 2.432-9.186 3.99m202.06 9.125c-2.993 8.658-6.079 17.286-8.903 25.999-.574 1.77-.682 4.026-.119 5.772 2.811 8.713 5.974 17.311 8.896 25.99 1.473 4.375 2.697 8.835 4.06 13.347 13.475-6.12 25.981-12.406 35.33-23.38 11.102-13.033 10.81-24.208 1.278-36.008-9.495-11.755-22.142-19.45-36.814-24.834-1.142 4.255-2.234 8.325-3.728 13.114M149.55 228.01c-4.144 1.421-.2 3.506.199 3.94 5.143 5.594 10.556 10.94 14.216 14.645l21.067-17.179-.947-1.414c-11.244 0-22.488 0-34.535.008M176.43 78h7.71l1.836-2.46-20.158-18.06-18.814 19.382.986 1.138h28.44M96.09 122.653l13.668-23.105-.733-1.164-26.295 6.69 8.217 27.665c2.043-3.857 3.502-6.61 5.143-10.086m135.425-7.627 9.596 17.699 8.075-27.753-26.292-6.53-.643 1.29c2.944 4.895 5.888 9.79 9.264 15.294M83.92 198.07c-1.922 2.948.645 3.36 2.381 3.834a394.804 394.804 0 0 0 16.173 4.032c2.357.538 4.796.72 7.675 1.132l-19.409-33.476c-2.396 8.401-4.574 16.04-6.82 24.478m155.064 5.39 10.156-2.895-7.963-26.894-19.502 33.741c6.13-1.305 11.36-2.418 17.31-3.952z"
    />
    <path d="M191.32 211.35c-17.47.05-34.545-.472-51.6-.1-6.549.143-9.37-3.103-12.134-7.972-8.18-14.41-16.522-28.728-24.949-42.995-2.986-5.056-2.875-9.7.108-14.73 9.203-15.516 18.342-31.073 27.234-46.77 2.967-5.237 8.125-4.042 12.267-4.548 8.682-1.062 17.522-1.301 26.281-1.125 9.551.192 19.104 1.065 28.61 2.068 1.722.181 3.76 2.1 4.748 3.757 9.332 15.64 18.427 31.42 27.685 47.105 2.78 4.708 2.76 9.237 0 13.869-9.488 15.917-19.143 31.74-28.332 47.83-2.529 4.426-6.193 2.759-9.919 3.61m-7.867-83.382c-6.339-4.114-13.096-5.765-20.791-5.08-19.608 1.746-30.719 20.24-25.72 39.078 3.383 12.748 16.239 21.539 28.673 21.21 13.743-.362 23.494-5.972 28.337-18.728 1.742-4.587 2.074-9.977 1.906-14.962-.297-8.847-4.538-15.912-12.405-21.518zM197.237 66.73c-6.193-6.697-12.137-13.137-18.82-20.38 6.747-4.207 13.095-8.801 19.998-12.3 7.708-3.906 15.724-6.872 24.772-7.227 13.327-.522 22.044 8.56 25.728 18.545 5.205 14.113 5.028 28.672 2.87 42.809-13.33-2.435-26.473-4.966-39.669-7.187-5.73-.964-7.33-6.226-10.859-9.464-1.436-1.317-2.524-3.014-4.02-4.796zM121.788 29.043c11.547 4.181 21.815 9.85 31.391 17.669-.824 1.035-1.551 2.046-2.377 2.97-8.468 9.473-16.895 18.984-25.496 28.336-1.233 1.34-3.23 2.378-5.036 2.73-13.278 2.585-26.597 4.96-40.05 7.428-1.912-13-2.405-26.408 1.793-39.589 6.075-19.073 20.234-26.073 39.775-19.544zM82.594 217.304c12.386 2.69 24.345 5.49 36.427 7.575 5.333.92 7.512 4.842 10.55 8.18 7.247 7.96 14.536 15.881 21.804 23.822.55.6 1.07 1.226 2.063 2.368-4.47 3.024-8.59 6.173-13.041 8.748-9.836 5.692-19.88 10.62-31.706 11.112-13.07.543-22.3-9.237-25.713-18.66-4.915-13.57-4.81-27.462-2.87-41.476.096-.7 1.378-1.237 2.486-1.67zM248.664 217.685c1.316.014 3.067.133 3.106.458 2.022 16.826 2.896 33.561-6.304 48.92-6.23 10.402-16.105 13.61-27.248 11.704-14.84-2.538-27.452-10.244-39.608-19.581 1.476-1.588 2.715-2.87 3.898-4.202 7.684-8.653 15.531-17.17 22.957-26.04 3.6-4.3 8.585-3.74 13.047-4.805 9.865-2.355 19.852-4.2 30.152-6.454zM58.734 114.68c3.018-1.341 5.725-2.465 8.874-3.773 2.106 7 4.002 13.879 6.259 20.637 2.176 6.516 4.77 12.892 7.067 19.37.385 1.087.54 2.496.2 3.563-4.027 12.608-8.159 25.182-12.302 37.752-.301.912-.911 1.722-1.445 2.703-14.187-5.593-26.723-13.43-36.87-24.886-8.19-9.245-8.197-24.512-.134-33.986 7.796-9.161 17.363-15.871 28.35-21.38zM260.683 123.663c1.293-4.43 2.385-8.5 3.527-12.755 14.672 5.384 27.32 13.08 36.814 24.834 9.531 11.8 9.824 22.975-1.278 36.008-9.349 10.974-21.855 17.26-35.33 23.38-1.363-4.512-2.587-8.972-4.06-13.348-2.922-8.678-6.085-17.276-8.896-25.989-.563-1.746-.455-4.002.119-5.772 2.824-8.713 5.91-17.34 9.104-26.358zM149.95 228.006c11.646-.004 22.89-.004 34.134-.004l.947 1.414-21.067 17.179c-3.66-3.704-9.073-9.05-14.216-14.645-.4-.434-4.343-2.519.202-3.944zM175.963 78h-27.974l-.986-1.138 18.814-19.381 20.158 18.059-1.836 2.46h-8.176zM95.999 123.015c-1.55 3.114-3.009 5.867-5.052 9.724l-8.217-27.665 26.295-6.69.733 1.164c-4.556 7.702-9.112 15.403-13.76 23.467zM231.299 114.722c-3.16-5.2-6.104-10.095-9.048-14.99l.643-1.29 26.292 6.53-8.075 27.753c-3.608-6.656-6.602-12.177-9.812-18.003zM83.955 197.67c2.212-8.039 4.39-15.678 6.786-24.08l19.409 33.477c-2.88-.412-5.318-.594-7.675-1.132a394.804 394.804 0 0 1-16.173-4.032c-1.736-.475-4.303-.886-2.347-4.234zM238.625 203.67c-5.59 1.323-10.819 2.436-16.95 3.741l19.503-33.74 7.963 26.893c-3.596 1.025-6.876 1.96-10.516 3.106z" />
    <path
      fill="#08dbfb"
      d="M183.727 128.213c7.592 5.36 11.833 12.425 12.13 21.272.168 4.985-.164 10.375-1.906 14.962-4.843 12.756-14.594 18.366-28.337 18.729-12.434.328-25.29-8.463-28.673-21.211-4.999-18.839 6.112-37.332 25.72-39.078 7.695-.685 14.452.966 21.066 5.326z"
    />
  </svg>
)
export default ReactIcon

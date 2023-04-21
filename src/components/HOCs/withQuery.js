import { Loader } from '../Loader/Loader'

// eslint-disable-next-line func-names
export const withQuery = (WrappedComponent) => function ({
  isLoading, isError, error, refetch, ...rest
}) {
  if (isError) {
    return (
      <div className="d-flex flex-column justify-content-center">
        <p>
          Error happend:
          {' '}
          {error.message}
        </p>

        <button
          onClick={refetch}
          type="button"
          className="btn btn-primary"
        >
          Refetch
        </button>

      </div>
    )
  }

  if (isLoading) return <Loader />

  return <WrappedComponent {...rest} />
}

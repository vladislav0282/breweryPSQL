import { useQuery } from '@tanstack/react-query'
import { barsApi } from '../../../API/BarsApi'
import { withQuery } from '../../HOCs/withQuery'
import { Loader } from '../../Loader/Loader'
import styles from './bars.module.css'
import { BarsItem } from './components/BarsItem/BarsItem'
import { MapYandex } from './components/MapYandex/MapYandex'

function BarsInner({ data }) {
  if (!data.length) {
    return (
      <div className={styles.emptyList}>
        <p>Bars not found</p>
        <i className="bi bi-emoji-frown" />
      </div>
    )
  }

  return (
    <div className={styles.wr}>
      {data.map((el) => (
        <BarsItem
          key={el.id}
          id={el.id}
          name={el.name}
          pictureMain={el.pictureMain}
          description={el.description}
          rating={el.rating}
          address={el.address}
          city={el.city}
        />
      ))}

      <div className={styles.mapWr}>
        <MapYandex data={data} />
      </div>
    </div>
  )
}

const BarsInnerWithQuery = withQuery(BarsInner)

export function Bars() {
  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getAllBars'],
    queryFn: () => barsApi.getAllBars(),
  })

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  }
  if (isError) {
    return (
      <div className={styles.errorMessage}>
        <h1>Bars not found</h1>
        <p>please try again later</p>
      </div>
    )
  }

  return (
    <BarsInnerWithQuery
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      refetch={refetch}
    />
  )
}

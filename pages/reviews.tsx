import Reviews from '@/modules/Reviews/Reviews'
import { ReviewService } from '@/services/review.service'
import { IReview } from '@/shared/models/review.interface'
import { GetStaticProps, NextPage } from 'next'

interface ReviewsPageProps {
	reviews: IReview[]
}

const ReviewsPage: NextPage<ReviewsPageProps> = ({ reviews }) => {
	return <Reviews reviews={reviews ?? []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: reviews } = await ReviewService.getAllApplied()
		return {
			props: {
				reviews,
			},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default ReviewsPage

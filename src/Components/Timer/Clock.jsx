import React from 'react'
import './Timer.css'

function Clock({ timerDays, timerHours, timerMinutes, timerSeconds }) {
	return (
		<>
			<section className='timer-containre'>
				<section className='timer-content'>
					<div className='clock'>
						<section>
							<small>Days</small>
							<p>{timerDays}</p>
						</section>
						<span>:</span>
						<section>
							<small>Hours</small>
							<p>{timerHours}</p>
						</section>
						<span>:</span>
						<section>
							<small>Minutes</small>
							<p>{timerMinutes}</p>
						</section>
						<span>:</span>
						<section>
							<small>Seconds</small>
							<p>{timerSeconds}</p>
						</section>
					</div>
				</section>
			</section>
		</>
	)
}

Clock.defaultProps = {
	timerDays: 3,
	timerHours: 23,
	timerMinutes: 19,
	timerSeconds: 56,
};

export default Clock
